"use client";

import { useEffect, useState } from "react";

import {
  getConversations,
  getMessages,
} from "@/services/conversation.service";

import MessageBubble from "@/components/conversations/MessageBubble";

export default function ConversationsPage() {
  const [conversations, setConversations] =
    useState<any[]>([]);

  const [selectedConversation,
    setSelectedConversation] =
    useState<any>(null);

  const [messages, setMessages] =
    useState<any[]>([]);

  useEffect(() => {
    loadConversations();
  }, []);

  const loadConversations =
    async () => {
      const data =
        await getConversations();

      setConversations(data);

      if (data.length) {
        selectConversation(data[0]);
      }
    };

  const selectConversation =
    async (
      conversation: any
    ) => {
      setSelectedConversation(
        conversation
      );

      const data =
        await getMessages(
          conversation.id
        );

      setMessages(data);
    };

  return (
    <div className="flex h-[calc(100vh-120px)] overflow-hidden rounded-xl border bg-white">

      <div className="w-80 border-r">

        {conversations.map(
          (conversation) => (
            <button
              key={conversation.id}
              onClick={() =>
                selectConversation(
                  conversation
                )
              }
              className="w-full border-b p-4 text-left hover:bg-slate-50"
            >
              <p className="font-medium">
                {conversation.customerName ??
                  conversation.customerPhone}
              </p>

              <p className="truncate text-sm text-slate-500">
                {
                  conversation.lastMessage
                }
              </p>
            </button>
          )
        )}
      </div>

      <div className="flex flex-1 flex-col">

        <div className="border-b p-4 font-semibold">
          {selectedConversation
            ?.customerPhone}
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {messages.map(
            (message) => (
              <MessageBubble
                key={message.id}
                role={message.role}
                content={
                  message.content
                }
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}