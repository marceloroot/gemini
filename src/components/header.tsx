"use client"
import { Github, Linkedin, Menu } from "lucide-react";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
  } from "lucide-react"
   
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"

function Header() {
    return (  
        <header className="flex item-center justify-between border-b shadow-md shadow-red-500/90 p-5   pb-4">
            <div>
            <Sheet>
            <SheetTrigger className="cursor-pointer"> <Menu /></SheetTrigger>
            <SheetContent side="left">
            <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Search..." />
                <CommandList>
                    <CommandEmpty>Sem Resultados.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                        <Smile className="mr-2 h-4 w-4" />
                        <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                        <Calculator className="mr-2 h-4 w-4" />
                        <span>Calculator</span>
                    </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                    <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                    </CommandGroup>
                </CommandList>
                </Command>
            </SheetContent>
            </Sheet>
           
            </div>
            <div>
               <Image src="/logo.png" alt="logo" height={80} width={80}  />
            </div>
            <div className="flex gap-4">
               <Github />
               <Linkedin />
            </div>
        </header>
    );
}

export default Header;