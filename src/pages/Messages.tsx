import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";

const CONVERSATIONS = [
  {
    id: 1,
    name: "Coach Maria",
    lastMessage: "Great job at practice today!",
    lastMessageTime: "2 hours ago",
    unread: 0,
  },
  {
    id: 2,
    name: "Alex (Equipment Lender)",
    lastMessage: "You can pick up the spikes anytime",
    lastMessageTime: "1 day ago",
    unread: 1,
  },
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState("");

  if (selectedConversation) {
    return (
      <div className="space-y-4 max-w-2xl mx-auto h-screen flex flex-col">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-4">
          <h1 className="text-xl font-bold">Coach Maria</h1>
          <p className="text-sm opacity-90">Active now</p>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 p-4 bg-muted/20 rounded-lg">
          <div className="flex justify-end">
            <Card className="bg-blue-500 text-white p-3 max-w-xs">
              <p>When is the next track session?</p>
              <p className="text-xs mt-1 opacity-80">10:45 AM</p>
            </Card>
          </div>
          <div className="flex">
            <Card className="bg-card p-3 max-w-xs">
              <p className="text-foreground">Tomorrow at 4 PM on the track</p>
              <p className="text-xs mt-1 text-muted-foreground">11:00 AM</p>
            </Card>
          </div>
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="bg-card text-foreground border border-border"
          />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="outline" className="mb-4" onClick={() => setSelectedConversation(null)}>
          ← Back to Inbox
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="mt-2 text-lg opacity-90">Stay connected with coaches, mentors, and other athletes</p>
      </div>

      <div className="grid gap-3">
        {CONVERSATIONS.map((conv) => (
          <Card
            key={conv.id}
            className="bg-card p-4 border border-border hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedConversation(conv.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{conv.name}</h3>
                  {conv.unread > 0 && <Badge className="bg-red-600 text-white">{conv.unread}</Badge>}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{conv.lastMessage}</p>
              </div>
              <p className="text-xs text-muted-foreground">{conv.lastMessageTime}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-yellow-50 dark:bg-yellow-900/20 p-4 border border-yellow-200 dark:border-yellow-800">
        <p className="text-sm text-yellow-900 dark:text-yellow-100">
          <strong>Safety:</strong> If someone makes you uncomfortable, use the "Block" button or report the conversation. Our community team will review it within 24 hours.
        </p>
      </Card>
    </div>
  );
}
