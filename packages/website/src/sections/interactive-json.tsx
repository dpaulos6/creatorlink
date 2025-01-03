import { Editor } from '@monaco-editor/react'
import { handleEditorDidMount } from '@/helpers/monaco'

interface InteractiveJsonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InteractiveJson = ({ ...props }: InteractiveJsonProps) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" {...props}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              Interactive JSON Example
            </h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Explore the rich data you can access through our API:
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8 overflow-hidden rounded-xl">
          <div className="flex gap-2 p-3 w-full min-h-8 bg-neutral-700">
            <span className="size-3 bg-red-600 rounded-full" />
            <span className="size-3 bg-amber-600 rounded-full" />
            <span className="size-3 bg-green-600 rounded-full" />
          </div>
          <div className="p-4 bg-neutral-800">
            <Editor
              height="100%"
              width="100%"
              language="json"
              value={JSON.stringify(JsonCode, null, 2)}
              className="min-h-[50dvh] rounded-md "
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                wordWrap: 'off',
                fontSize: 14,
                tabSize: 4
              }}
              beforeMount={handleEditorDidMount}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const JsonCode = {
  papaplatte: {
    name: 'Papaplatte',
    steam: {
      id: '76561198013760707',
      name: 'lattensepp'
    },
    discord: {
      id: '169926504657059840',
      username: 'papaplatte420',
      partner: true
    },
    twitch: {
      id: 'papaplatte',
      partner: true
    },
    youtube: {
      handle: '@papaplatte',
      id: 'UCDmbhGe7-wC1a55l5ZYAZJw',
      partner: true
    }
  }
}
