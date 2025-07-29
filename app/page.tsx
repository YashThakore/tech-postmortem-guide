'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Clock,
  AlertTriangle,
  Users,
  ShieldCheckIcon,
  Wrench,
  FileText,
  Heart
} from "lucide-react"

export default function TechPostmortemGuide() {
  const rhetoricalMoves = [
    {
      title: "Incident Summary",
      status: "Obligatory",
      icon: <AlertTriangle className="h-5 w-5 text-white" />,
      description: "Brief overview of what happened to cause the incident",
      example: "Today at 6:47am PT (company) experienced an system outage for approximately 45 minutes.",
      evidence:
        "“Earlier today, most Google users who use logged-in services like Gmail, Google+, Calendar and Documents found they were unable to access those services for approximately 25 minutes” - Google",
    },
    {
      title: "Cause Analysis",
      status: "Common",
      icon: <FileText className="h-5 w-5 text-white" />,
      description: "Explains the issue that caused the incident",
      example:
        "This outage was caused by a bug introduced during a routine configuration change to our backend services.",
      evidence:
        "“During one of these routine maintenance jobs, a command was issued with the intention to assess the availability of global backbone capacity, which unintentionally took down all the connections in our backbone network, effectively disconnecting Facebook data centers globally.” - Meta Engineering",
    },
    {
      title: "Impact Statement",
      status: "Common",
      icon: <Users className="h-5 w-5 text-white" />,
      description: "Who or what was affected by the incident",
      example: "Users were unable to access core services globally during the outage.",
      evidence:
        "“On June 12, 2025, Cloudflare suffered a significant service outage that affected a large set of our critical services, including Workers KV, WARP, Access, Gateway, Images, Stream, Workers AI, Turnstile and Challenges, AutoRAG, Zaraz, and parts of the Cloudflare Dashboard.” - Cloudflare",
    },
    {
      title: "Mitigation Efforts",
      status: "Optional",
      icon: <ShieldCheckIcon className="h-5 w-5 bg-transparent text-white" />,
      description: "Actions taken during the incident to reduce damage",
      example:
        "We reverted the configuration change and began rerouting traffic through healthy nodes while applying a fix.",
      evidence:
        "“We will lengthen the amount of time the electrical switching equipment gives the generators to reach stable power before the switch board assesses whether the generators are ready to accept the full power load. Additionally, we will expand the power quality tolerances allowed when evaluating whether to switch the load to generator power.” - Amazon Web Services",
    },
    {
      title: "Technical Details",
      status: "Optional",
      icon: <Wrench className="h-5 w-5 text-white" />,
      description: "In-depth details of what failed",
      example:
        "The issue originated in the global control panel which manages communication layer.",
      evidence:
        "“We use a fleet of HAProxy instances behind a layer 4 load-balancer to distribute requests to the webapp tier. We use Consul for service discovery, and consul-template to render lists of healthy webapp backends that HAProxy should route requests to.” - Slack Engineering",
    },
    {
      title: "Preventive Actions",
      status: "Common",
      icon: <CheckCircle className="h-5 w-5 text-white" />,
      description: "Steps taken to prevent future occurrences",
      example: "We've implemented automated safeguards for config changes and improved alerting thresholds.",
      evidence:
        "“We’ve since added an additional layer of checks that require machines to locally verify their state before executing incoming commands. This enables machines that self-identify as running critical processes to refuse potentially destructive operations.” - Dropbox Tech",
    },
    {
      title: "Apology",
      status: "Optional",
      icon: <Heart className="h-5 w-5 text-white" />,
      description: "Public apology or responsibility",
      example: "We know how much people rely on our services, and we're sorry for the disruption this caused.",
      evidence:
        "“All of us at GitHub would like to sincerely apologize for the impact this caused to each and every one of you. We’re aware of the trust you place in GitHub and take pride in building resilient systems that enable our platform to remain highly available. With this incident, we failed you, and we are deeply sorry.” – Github Blog",
    },
    {
      title: "Timeline of Events",
      status: "Obligatory",
      icon: <Clock className="h-5 w-5 text-white" />,
      description: "Step-by-step breakdown of when the incident unfolded",
      example:
        "10:30 UTC: Deployment began\n11:00 UTC: Errors increased\n11:06 UTC: Incident declared\n11:28 UTC: Deployment halted",
      evidence: "https://i.imgur.com/nsWeqY0.png",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Obligatory":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "Common":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "Optional":
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            How to Write a Tech Postmortem
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A practical guide to understanding and applying rhetorical moves in technical outage reports
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <p className="text-lg leading-relaxed text-gray-300">
              Tech postmortems are public write-ups companies publish after service outages. These documents aim to
              explain what happened, why it happened, who was affected, and what steps are being taken to prevent future
              issues. They're written for both technical audiences (like engineers) and non-technical stakeholders (like
              customers or management). This guide explains how to structure and write an effective postmortem using
              rhetorical move analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Moves */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Rhetorical Moves</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {rhetoricalMoves.map((move, index) => {
              const [expanded, setExpanded] = useState(false)

              return (
                <Card
                  key={index}
                  onClick={() => setExpanded(!expanded)}
                  className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {move.icon}
                        <CardTitle className="text-xl text-white">{move.title}</CardTitle>
                      </div>
                      <Badge className={getStatusColor(move.status)}>{move.status}</Badge>
                    </div>
                    <CardDescription className="text-gray-400">{move.description}</CardDescription>
                  </CardHeader>
                  {expanded && (
                    <CardContent>
                      <div className="bg-gray-800/50 rounded-md p-4 border border-gray-700">
                        <p className="text-sm font-medium text-gray-300 mb-2">Example:</p>
                        <p className="text-sm text-gray-400 italic whitespace-pre-line">"{move.example}"</p>
                      </div>
                      <div className="bg-gray-700/30 rounded-md p-3 border border-gray-600 mt-3">
                        <p className="text-xs font-medium text-gray-400 mb-1">Source:</p>
                        {move.evidence?.match(/\.(jpeg|jpg|gif|png)$/i) ? (
                          <img
                            src={move.evidence || "/placeholder.svg"}
                            alt="Evidence"
                            className="rounded-md mt-2 border border-gray-600"
                          />
                        ) : (
                          <p className="text-xs text-gray-500">{move.evidence}</p>
                        )}
                      </div>
                    </CardContent>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">Created by Yash Thakore for ENC3250 at UCF.</p>
        </div>
      </footer>
    </div>
  )
}
