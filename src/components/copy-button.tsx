"use client";

import { useState } from "react";

interface CopyButtonProps {
 textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
 const [copied, setCopied] = useState(false);

 const handleCopy = async () => {
 try {
 await navigator.clipboard.writeText(textToCopy);
 setCopied(true);
 setTimeout(() => setCopied(false), 1500);
 } catch {
 setCopied(false);
 }
 };

 return (
 <button
 type="button"
 onClick={handleCopy}
 className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
 >
 {copied ? "Đã copy!" : "Copy email liên hệ"}
 </button>
 );
}
