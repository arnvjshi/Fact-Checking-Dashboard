"use client"

import { useState } from "react"
import { Steps } from "@/components/steps"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export default function HomePage() {
  const [url, setUrl] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsChecking(true)
    setResult(null)

    // Simulate API calls and processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Dummy result
    setResult({
      credibilityScore: Math.floor(Math.random() * 100),
      sentiment: Math.random() > 0.5 ? "Positive" : "Negative",
      communitySearches: Math.floor(Math.random() * 1000),
      suggestedSources: ["https://www.reuters.com", "https://www.apnews.com", "https://www.bbc.com/news"],
    })

    setIsChecking(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
            Fact-Checking Dashboard
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            An intelligent system for verifying news and information through advanced NLP processing and community
            insights.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Check a News Article</CardTitle>
            <CardDescription>Enter a URL to fact-check the article</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                type="url"
                placeholder="https://example.com/news-article"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
              <Button type="submit" disabled={isChecking}>
                {isChecking ? "Checking..." : "Check Facts"}
              </Button>
            </form>

            {isChecking && (
              <div className="mt-4">
                <p className="mb-2">Analyzing article...</p>
                <Progress value={66} className="w-full" />
              </div>
            )}

            {result && (
              <Alert className="mt-4">
                <AlertTitle>Fact-Check Results</AlertTitle>
                <AlertDescription>
                  <p>Credibility Score: {result.credibilityScore}%</p>
                  <p>Sentiment: {result.sentiment}</p>
                  <p>Community Searches: {result.communitySearches}</p>
                  <p>Suggested Sources:</p>
                  <ul className="list-disc pl-5">
                    {result.suggestedSources.map((source, index) => (
                      <li key={index}>
                        <a
                          href={source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {source}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>Our fact-checking process follows a comprehensive 5-step workflow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mCaIINnQ6vokDXIgMI2dZDZ28d7pQh.png"
                alt="Fact-checking workflow diagram showing 5 steps from input to output"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </CardContent>
        </Card>

        <Steps />
      </div>
    </main>
  )
}

