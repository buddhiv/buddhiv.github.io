import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { LinkPreview } from "@/components/LinkPreview";
import { BlurImage } from "./BlurImage";
import HoverPattern from "./Hover/HoverPattern";
import AchievementCard from "./AchievementCard";
import LargeAchievementCard from "./LargeAchievementCard";

const Achievements = () => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
            <LargeAchievementCard
                title={'AWS Certified'}
                description={'AWS Certified Solutions Architect – Associate'}
                image={'/aws.png'}
                width={100}
                height={100}
                link={'https://www.credly.com/badges/c9ba3c40-c644-4fca-a12c-123895143cc6/linked_in?t=s1bx4d'}
            />
            <AchievementCard
                title={'Linux Certified'}
                description={'Developing Secure Software (LFD121)'}
                image={'/linux.png'}
                width={160}
                height={54}
                link={'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/47c5cb7b-56e7-439c-8109-be5368d2f3c3-buddhi-vikasitha-4f256325-089b-4e51-94ab-6a363a06855b-certificate.pdf'}
            />
            <AchievementCard
                title={'6 Years of Experience'}
                description={'Experience in leading a variety of cross-functional teams'}
                emoji={'👨‍💻'}
            />
        </div>
    );
};

export default Achievements;