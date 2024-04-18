"use client"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"
import { SendHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { chat, prompt } from "@/app/helper/geminit";
import { chatGeminiI } from "@/interfaces/gemini/inteface";

function PlaceOrders() {
    const [geminiResoponse,setGeminiResoponse] = useState<chatGeminiI[]>([]);
    const [command,setCommand] = useState('');

    async function run() {
    
      
        setGeminiResoponse(prev =>[...prev,{
            userType:"Usuario",
            text:command
        }]);
        setCommand('')
        const result = await chat.sendMessage(prompt + command);
        const response = await result.response;
        const text:any = response.text();
        
        const atenattendansresponse:chatGeminiI={
            userType:"Atendente",
            text:text
        }
        setGeminiResoponse(prev =>[...prev,atenattendansresponse]);

        if(command.toLocaleLowerCase() === "encerrar"){
      
            setGeminiResoponse([])
            setCommand('')
        }
    }
    
    function handleTextareaKeyPress(event: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevents the default line break behavior of the Textarea
            run();
        }
    }


    return (  
        <>
        <div className="flex flex-col items-center w-full mt-5 gap-5">
              
                <h1>Digite seu pedido</h1>
                <Textarea
                onChange={(e) => setCommand(e.target.value)}
                value={command} 
                placeholder="Digite seu pedido"
                onKeyDown={handleTextareaKeyPress}
                />
                <Button variant="outline" className="border" onClick={run}><SendHorizontal /></Button>
        
        </div>
        <div className="flex flex-col    w-full mt-5 gap-5 border min-h-64 p-4">

           {geminiResoponse.slice().reverse().map((item,key) => (
                 <div key={key} className="flex">
                    <p  className="text-md text-white/80 text-start" style={{ whiteSpace: 'pre-wrap' }}>
                    <span className="font-bold text-blue-400">{item.userType}: </span>
                    <span dangerouslySetInnerHTML={{ __html: item.text.replace(/\n/g, '<br>') }} />
                    
                </p>
                </div>
           
           ))

           }
            
          
             
            

        </div>
        </>
    );
}

export default PlaceOrders;
