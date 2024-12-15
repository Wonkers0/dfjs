import * as babel from "@babel/core"
import * as fs from "fs"
import * as path from "path"
import { gzip } from "pako"
import chalk from "chalk"
import ora, { oraPromise } from "ora"
import { WebSocket } from "ws"

const transpileFile = async (filePath: string) => {
  const inputCode = fs.readFileSync(filePath, "utf-8")
  const result = await babel.transformAsync(inputCode, {
    filename: path.basename(filePath),
    sourceMaps: true,
  })

  if (!result || !result.code) {
    throw new Error("Failed to compile with Babel")
  }

  const parsedArray = JSON.parse(result.code.slice(0, -1))
  return parsedArray.flatMap((thread: any) =>
    thread.map((o: any) =>
      btoa(String.fromCharCode.apply(null, [...gzip(JSON.stringify(o))]))
    )
  )
}

const sendToGame = (ws: WebSocket, templates: string[]) => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send("place swap")
    templates.forEach((template) => ws.send(`place ${template}`))
    ws.send("place go")
  }
}

const compileFolderWithBabel = async (folder: string) => {
  console.log(
    chalk.blueBright(`
    8888888b.  8888888888 888888  .d8888b.  
    888  "Y88b 888          "88b d88P  Y88b 
    888    888 888           888 Y88b.      
    888    888 8888888       888  "Y888b.   
    888    888 888           888     "Y88b. 
    888    888 888           888       "888 
    888  .d88P 888           88P Y88b  d88P 
    8888888P"  888           888  "Y8888P"  
                          .d88P            
                        .d88P"             
                        888P"
    `)
  )

  const start = performance.now()
  const transpilePromise = Promise.all(
    fs.readdirSync(folder).map(async (file) => {
      const filePath = path.join(folder, file)
      if (!fs.lstatSync(filePath).isFile() || !filePath.endsWith(".df.ts"))
        return
      return transpileFile(filePath)
    })
  )

  oraPromise(transpilePromise, {
    text: "Transpiling code with Babel",
    successText: `Code transpiled in ${(performance.now() - start).toFixed(
      3
    )}ms`,
    failText: "Could not transpile code",
  })

  return (await transpilePromise).flat().filter(Boolean)
}

const main = async () => {
  const templates = await compileFolderWithBabel("./code")
  const ws = new WebSocket("ws://localhost:31375/ws")

  process.stdin.resume()
  console.log(
    chalk.green("\nWatching for file changes... Press Ctrl+C to exit\n")
  )

  ws.onopen = () => {
    ws.send("scopes write_code clear_plot")
  }

  ws.onmessage = (event) => {
    if (event.data !== "auth") return
    ws.send("clear") // Clear the plot on first transpilation
    sendToGame(ws, templates)
  }

  let debounceTimer: ReturnType<typeof setTimeout> | null = null

  fs.watch("./code", { recursive: true }, async (event, filename) => {
    if (!filename?.endsWith(".dfjs")) return

    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    debounceTimer = setTimeout(async () => {
      const start = performance.now()
      const spinner = ora(`Re-transpiling ${filename}...`).start()
      try {
        const filePath = path.join("./code", filename)
        const newTemplates = await transpileFile(filePath)
        templates.length = 0
        templates.push(...newTemplates)

        const ms = (performance.now() - start).toFixed(3)
        spinner.succeed(`Re-transpiled ${filename} (${ms}ms)`)
        sendToGame(ws, templates)
      } catch (error) {
        spinner.fail(`Failed to re-transpile ${filename}`)
        console.error(chalk.red(error))
      }
    }, 1500)
  })

  process.on("SIGINT", () => {
    console.log(chalk.yellow("\nGracefully shutting down..."))
    ws.close()
    process.exit(0)
  })
}

main().catch((error) => {
  console.error(chalk.red("Error in main:"), error)
  process.exit(1)
})
