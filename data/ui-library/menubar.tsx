import React from 'react'
import { Home, MessageCircle, Settings, User } from 'lucide-react'

const Menubar = () => {
  return (
    <div className="border border-muted-foreground/50 py-2 flex gap-1 rounded-lg">
      <div className="group relative px-3 cursor-pointer">
        <Home className='size-8 hover:text-blue-500' />
      </div>
      <div className="group relative px-3 cursor-pointer">
        <MessageCircle className='size-8 hover:text-blue-500' />
      </div>
      <div className="group relative px-3 cursor-pointer">
        <User className='size-8 hover:text-blue-500' />
      </div>
      <div className="group relative px-3 cursor-pointer">
        <Settings className='size-8 hover:text-blue-500' />
      </div>
    </div>
  )
}

export default Menubar