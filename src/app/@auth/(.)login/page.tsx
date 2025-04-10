'use client'
import CMLoginForm from "@/components/ui/cm_login_form";
import CMLoginModal from "@/components/ui/cm_login_modal";

import {useState} from "react";

export default function Page() {

    const [isOpen, setIsOpen] = useState(true);
    return (
        <CMLoginModal open={isOpen} setOpen={setIsOpen} >
            <CMLoginForm onSuccess={()=>setIsOpen(false)} />
        </CMLoginModal>
    )
}