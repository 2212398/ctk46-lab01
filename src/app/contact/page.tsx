"use client";

import { useActionState } from "react";
import { sendContactMessage, ContactFormState } from "./actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const initialState: ContactFormState = {
 success: false,
};

export default function ContactPage() {
 const [state, formAction, isPending] = useActionState(
 sendContactMessage,
 initialState
 );

 return (
 <div className="max-w-5xl mx-auto px-4 py-12">
 <h1 className="text-3xl font-bold mb-2">Liên hệ</h1>
 <p className="text-gray-500 dark:text-gray-400 mb-8">
 Bạn có câu hỏi hoặc muốn hợp tác? Hãy gửi tin nhắn cho tôi!
 </p>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {/* Thông tin liên hệ */}
 <div className="space-y-4">
 <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
 <h3 className="font-semibold mb-1">Email</h3>
 <a
 href="mailto:2212398@dlu.edu.vn"
 className="text-emerald-600 dark:text-emerald-400 hover:underline text-sm"
 >
 2212398@dlu.edu.vn
 </a>
 </div>

 <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
 <h3 className="font-semibold mb-1">GitHub</h3>
 <a
 href="https://github.com/2212398"
 target="_blank"
 rel="noopener noreferrer"
 className="text-emerald-600 dark:text-emerald-400 hover:underline text-sm"
 >
 github.com/2212398
 </a>
 </div>

 <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
 <h3 className="font-semibold mb-1">Địa chỉ</h3>
 <p className="text-sm text-gray-600 dark:text-gray-300">
 Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt
 </p>
 </div>
 {/* Form liên hệ */}
<div className="md:col-span-2">
  {state.success ? (
    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
      <h3 className="text-green-700 font-semibold text-lg mb-2">Gửi thành công!</h3>
      <p className="text-green-600">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.</p>
    </div>
  ) : (
    <Card>
      <CardContent className="pt-6">
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Họ và tên</Label>
            <Input id="name" name="name" placeholder="Nguyễn Văn A" required />
            {state.errors?.name && (
              <p className="text-red-500 text-sm">{state.errors.name[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="email@example.com" required />
            {state.errors?.email && (
              <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Tiêu đề</Label>
            <Input id="subject" name="subject" placeholder="Chủ đề bạn muốn trao đổi" required />
            {state.errors?.subject && (
              <p className="text-red-500 text-sm">{state.errors.subject[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Nội dung</Label>
            <Textarea id="message" name="message" placeholder="Viết nội dung tin nhắn..." rows={5} required />
            {state.errors?.message && (
              <p className="text-red-500 text-sm">{state.errors.message[0]}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Đang gửi..." : "Gửi tin nhắn"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )}
</div>
 </div>

 {/* Form liên hệ */}
 <div className="md:col-span-2">
 {state.success ? (
 <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-lg p-6 text-center">
 <h3 className="text-green-700 dark:text-green-400 font-semibold text-lg mb-2">
 Gửi thành công!
 </h3>
 <p className="text-green-600 dark:text-green-300">
 Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.
 </p>
 </div>
 ) : (
 <form action={formAction} className="space-y-4">
 <div>
 <label
 htmlFor="name"
 className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
 >
 Họ và tên
 </label>
 <input
 id="name"
 name="name"
 type="text"
 placeholder="Nguyễn Hoàng Kiệt"
 required
 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-900"
 />
 {state.errors?.name && (
 <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
 )}
 </div>

 <div>
 <label
 htmlFor="email"
 className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
 >
 Email
 </label>
 <input
 id="email"
 name="email"
 type="email"
 placeholder="2212398@dlu.edu.vn"
 required
 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-900"
 />
 {state.errors?.email && (
 <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>
 )}
 </div>

 <div>
 <label
 htmlFor="subject"
 className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
 >
 Tiêu đề
 </label>
 <input
 id="subject"
 name="subject"
 type="text"
 placeholder="Chủ đề bạn muốn trao đổi"
 required
 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-900"
 />
 {state.errors?.subject && (
 <p className="text-red-500 text-sm mt-1">{state.errors.subject[0]}</p>
 )}
 </div>

 <div>
 <label
 htmlFor="message"
 className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
 >
 Nội dung
 </label>
 <textarea
 id="message"
 name="message"
 placeholder="Viết nội dung tin nhắn..."
 required
 rows={5}
 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none bg-white dark:bg-gray-900"
 />
 {state.errors?.message && (
 <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>
 )}
 </div>

 <button
 type="submit"
 disabled={isPending}
 className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
 >
 {isPending ? "Đang gửi..." : "Gửi tin nhắn"}
 </button>
 </form>
 )}
 </div>
 </div>
 </div>
 );
}

