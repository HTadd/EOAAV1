import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";

const TEMPLATES = [
  {
    id: "coach-letter",
    title: "Coach Recommendation Letter Request",
    description: "Email template to send to a coach requesting a recommendation letter",
    content: `Dear Coach [Name],

I am applying for [Grant Name] to support my athletic development. As part of the application process, I need a recommendation letter from a coach who can speak to my commitment and potential.

Would you be willing to write a brief letter (2-3 paragraphs) by [Date] describing:
- My athletic performance and improvement
- My dedication and work ethic
- My goals and potential

Please send the letter to [Grant Contact Email] with the subject line "[Your Name] - Coach Recommendation."

Thank you for your support!

Best regards,
[Your Name]`,
  },
  {
    id: "needs-statement",
    title: "Personal Needs Statement",
    description: "Template for writing about why you need financial support",
    content: `Needs Statement

My name is [Your Name] and I am applying for [Grant Name] because I am passionate about [Sport] and committed to achieving [Your Goal]. However, I face financial barriers that are preventing me from reaching my full potential.

Currently, I spend approximately [Amount] per month on [training/equipment/travel]. This represents [Percentage]% of my household income, making it increasingly difficult to continue pursuing this opportunity.

With the support of this grant, I would be able to:
1. [Specific use of funds]
2. [Specific use of funds]
3. [Specific use of funds]

This investment will directly support my progress and allow me to focus on my athletic development without the stress of financial hardship.`,
  },
  {
    id: "budget",
    title: "Budget Worksheet",
    description: "Form for itemizing how you will use grant funds",
    content: `Budget Worksheet

Applicant: [Your Name]
Grant: [Grant Name]
Amount Requested: $[Amount]

| Item | Cost | Justification |
|------|------|---------------|
| | $ | |
| | $ | |
| | $ | |
| | $ | |
| | $ | |
|---|---|---|
| TOTAL | $ | |

Notes:
`,
  },
];

export default function Toolkit() {
  const [selectedTemplate, setSelectedTemplate] = useState("coach-letter");
  const [draftText, setDraftText] = useState(TEMPLATES[0].content);

  const currentTemplate = TEMPLATES.find((t) => t.id === selectedTemplate);

  const handleExport = (format: "pdf" | "docx") => {
    alert(`Exporting as ${format.toUpperCase()}... (placeholder)`);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">Funding Toolkit</h1>
        <p className="mt-2 text-lg opacity-90">Templates and tools to help with grant applications</p>
      </div>

      <Tabs value={selectedTemplate} onValueChange={setSelectedTemplate} className="w-full">
        <TabsList className="w-full bg-muted">
          {TEMPLATES.map((template) => (
            <TabsTrigger key={template.id} value={template.id} className="flex-1">
              {template.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {TEMPLATES.map((template) => (
          <TabsContent key={template.id} value={template.id} className="space-y-4 mt-6">
            <Card className="bg-card p-6 border border-border">
              <h2 className="font-semibold text-foreground mb-2">{template.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{template.description}</p>

              <label className="block text-sm font-medium text-foreground mb-2">Edit Template</label>
              <textarea
                value={draftText}
                onChange={(e) => setDraftText(e.target.value)}
                className="w-full h-64 p-4 border border-border rounded-lg bg-background text-foreground font-mono text-sm resize-none"
                placeholder="Edit your template here..."
              />

              <div className="flex gap-3 mt-4">
                <Button className="gap-2" onClick={() => handleExport("pdf")}>
                  <Download className="h-4 w-4" /> Export as PDF
                </Button>
                <Button variant="outline" className="gap-2" onClick={() => handleExport("docx")}>
                  <Download className="h-4 w-4" /> Export as DOCX
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    navigator.clipboard.writeText(draftText);
                    alert("Copied to clipboard!");
                  }}
                >
                  Copy to Clipboard
                </Button>
              </div>
            </Card>

            <Card className="bg-yellow-50 dark:bg-yellow-900/20 p-4 border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-yellow-900 dark:text-yellow-100">
                <strong>💡 Tip:</strong> Personalize each template with your specific information before submitting. Grant evaluators can tell when templates aren't customized!
              </p>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
