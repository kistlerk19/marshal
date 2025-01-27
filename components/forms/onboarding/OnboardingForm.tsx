"use client";
import Image from "next/image";
import Logo from '@/public/logo.png';
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

type UserSelectionType = "company" | "seeker" | null;

export function OnboardingForm (){
    const [step, setStep] = useState(1);
    const [userType, setUserType] = useState<UserSelectionType>(null);

    function handleUserTypeSelection (userType: UserSelectionType){
        setUserType(userType);
        setStep(2);
    }

    function renderStep () {
        switch (step) {
            case 1:
                return (<p>User Type Selection Form</p>)
            
            case 2:
                return userType === "company" ? <p>Company Form</p> : <p>Seeker Form</p>
            
            default:
                return null;
        }
    }

    return (
        <>
            <div className="flex items-center gap-4 mb-10">
                <Image src={Logo} alt="Job Seeker Logo" width={50} height={50} />
                <h1 className="font-bold text-4xl">
                    Job<span className="text-primary">Seeker</span>
                </h1>
            </div>

            <Card className="max-w-lg w-full">
                <CardContent className="p-6">
                    { renderStep() }
                </CardContent>
            </Card>
        </>
    )
}