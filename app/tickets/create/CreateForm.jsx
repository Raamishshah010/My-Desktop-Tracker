"use client"
import { useRouter } from "next/router";
import { useState } from "react";
const CreateForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)


    return (
        <div>CreateForm</div>
    )
}

export default CreateForm