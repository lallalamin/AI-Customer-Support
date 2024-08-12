"use client"

import { Box, Stack, TextField, Button, Typography } from "@mui/material"
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    {role:'assistant', content:'Hello! Im Fridgy, cooking assistant. How can I help you today?'}
  ])

  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;
    setIsLoading(true)
  
    setMessage('')
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message },
      { role: 'assistant', content: '' },
    ])
  
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([...messages, { role: 'user', content: message }]),
      })
  
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
  
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
  
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const text = decoder.decode(value, { stream: true })
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1]
          let otherMessages = messages.slice(0, messages.length - 1)
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ]
        })
      }
    } catch (error) {
      console.error('Error:', error)
      setMessages((messages) => [
        ...messages,
        { role: 'assistant', content: "I'm sorry, but I encountered an error. Please try again later." },
      ])
    }
    setIsLoading(false)
  }
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }
  
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      
    >
       <Box
          display="flex"
          alignItems="center"
          width="600px"
          p={2}
          sx={{
            background: '#4CAF50', // Header background color
            color: 'white',
            borderRadius: '10px 10px 0 0', // Rounded corners on top
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Optional shadow for header
          }}
        >
          <img src="\android-chrome-192x192.png" alt="Logo" style={{ height: '40px', width: 'auto', marginRight: '10px' }} /> {/* Adjust logo path and size */}
          <Typography variant="h6">Fridgy Chat</Typography> {/* Header text */}
        </Box>
      <Stack
        direction={'column'}
        width="600px"
        height="600px"
        borderRadius="0 0 10px 10px"
        p={2}
        spacing={3}
        sx={{
          background: 'white', // Background color of the chat box
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Shadow to give a pop-up effect
          transform: 'translateY(-10px)', 
        }}
      >
        
       

        <Stack
          direction={'column'}
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.role === 'assistant' ? 'flex-start' : 'flex-end'
              }
            >
              <Box
                bgcolor={
                  message.role === 'assistant'
                    ? '#89B449'
                    : '#a9c480'
                }
                color="white"
                borderRadius={5}
                p={3}
              >
                {message.content}
              </Box>
            </Box>
          ))}
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <TextField
            label="Message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="contained" onClick={sendMessage} className="green-button">
            Send
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

