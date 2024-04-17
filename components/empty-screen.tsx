import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import Image from 'next/image'

const exampleMessages = [
  {
    heading: 'Quantos presidentes o Brasil já teve?',
    message: 'Quantos presidentes o Brasil já teve?'
  },
  {
    heading: 'O que diz a lei 8.112/90?',
    message: 'O que diz a lei 8.112/90?'
  },
  {
    heading: 'Cite 4 princípios Tributários',
    message: 'Cite 4 princípios Tributários'
  },
  {
    heading: 'Quantos pontos preciso para ser aprovado na OAB?',
    message: 'Quantos pontos preciso para ser aprovado na OAB?'
  },

  {
    heading: 'Cite 3 garantias fundamentais',
    message: 'Cite 3 garantias fundamentais'
  },
  {
    heading: 'Qual art. do Código Civil aborda Herança?',
    message: 'Qual art. do Código Civil aborda Herança?'
  },
  // {
  //   heading: 'Explain technical concepts',
  //   message: `What is a "serverless function"?`
  // },
  // {
  //   heading: 'Summarize an article',
  //   message: 'Summarize the following article for a 2nd grader: \n'
  // },
  // {
  //   heading: 'Draft an email',
  //   message: `Draft an email to my boss about the following: \n`
  // }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-screen-lg px-4">
      <div className="flex justify-center items-center h-full">
        <Image
          src="/CabraLLM.png"
          width={245}
          height={245}
          alt="Happy sheep image"
        />
      </div>
      <div className="bg-background p-8">
        <h1 className="mb-2 text-2xl font-extrabold text-center">
          Como eu posso te ajudar?
        </h1>
        <div className="mt-4 flex flex-wrap justify-center space-x-3">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="outline"
              className="text-xs font-semibold shadow-none mb-3"
              onClick={() => setInput(message.message)}
            >
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
