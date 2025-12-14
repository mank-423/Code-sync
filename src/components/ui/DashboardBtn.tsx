"use client";

import Link from "next/link";
import { Button } from "./button";
import { SparkleIcon } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";

const DashboardBtn = () => {

    const { isCandidate, isInterviewer, isLoading } = useUserRole();

    if (isCandidate || isLoading) return null;

    return (
        <div>
            <Link href={"/dashboard"}>
                <Button className="gap-2 font-medium">
                    <SparkleIcon className="size-4" />
                    Dashboard
                </Button>
            </Link>
        </div>
    )
}

export default DashboardBtn