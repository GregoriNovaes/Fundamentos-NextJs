import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Store } from "lucide-react";

export function CallToAction() {
  return (
    <section className="rabsolute inset-0 bg-[url('/Call-To-Section.svg')] bg-cover bg-center bg-no-repeat opacity-90">
      <div className=" relative py-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-4 bg-cyan-300 w-fit rounded-full -mt-[7.5rem]">
            <Store className="text-cyan-100" />
          </div>

          <h2 className={`font-sans mt-[3rem] max-w-[28.125rem] text-gray-100 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl`}>Crie uma loja online e inicie suas vendas ainda hoje</h2>

          <Button className="mt-6" asChild>
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight className="text-gray-100" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}