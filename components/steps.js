import { Check, FileSearch, Globe, MessageSquareText, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    color: "bg-[#1a365d]",
    icon: Globe,
    title: "Input",
    description: "User enters headline/URL for fact-checking analysis",
  },
  {
    number: "02",
    color: "bg-[#2b4c8c]",
    icon: MessageSquareText,
    title: "NLP Processing",
    description: "Advanced sentiment analysis and keyword extraction",
  },
  {
    number: "03",
    color: "bg-[#3b82f6]",
    icon: FileSearch,
    title: "Database/API Integration",
    description: "Cross-reference with verified sources and fact-checking databases",
  },
  {
    number: "04",
    color: "bg-[#60a5fa]",
    icon: Users,
    title: "Community Insights",
    description: "Aggregate and analyze community search patterns",
  },
  {
    number: "05",
    color: "bg-emerald-500",
    icon: Check,
    title: "Output",
    description: "Comprehensive credibility assessment and source recommendations",
  },
]

export function Steps() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <Card key={step.number} className="relative overflow-hidden">
          <div className={`absolute right-0 top-0 h-full w-2 ${step.color}`} />
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${step.color} text-white`}>
                <step.icon className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-500">{step.number}</span>
                  {step.title}
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">{step.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

