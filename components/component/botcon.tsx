/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/157SPUwJOIp
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Arimo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Botcon() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-6xl mx-auto py-12 px-4  text-white  md:px-6   flex-col items-center content-center" >
      <div className="space-y-4 border p-6  rounded-sm backdrop-blur-lg py-32 space-x-4 border-white">
        <h2 className="text-3xl font-bold">Choose your business type</h2>
        <p className="text-muted-foreground">Select the type of business you want to create.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="p-4 hover:bg-muted/50 cursor-pointer">
            <div className="flex flex-col items-center justify-center gap-2">
              <LibraryIcon className="h-8 w-8" />
              <div className="text-center font-medium">Museum</div>
            </div>
          </Card>
          <Card className="p-4 hover:bg-muted/50 cursor-pointer">
            <div className="flex flex-col items-center justify-center gap-2">
              <DogIcon className="h-8 w-8" />
              <div className="text-center font-medium">Zoo</div>
            </div>
          </Card>
          <Card className="p-4 hover:bg-muted/50 cursor-pointer">
            <div className="flex flex-col items-center justify-center gap-2">
              <MenuIcon className="h-8 w-8" />
              <div className="text-center font-medium">Restaurant</div>
            </div>
          </Card>
          <Card className="p-4 hover:bg-muted/50 cursor-pointer">
            <div className="flex flex-col items-center justify-center gap-2">
              <StoreIcon className="h-8 w-8" />
              <div className="text-center font-medium">Retail</div>
            </div>
          </Card>
          <Card className="p-4 hover:bg-muted/50 cursor-pointer">
            <div className="flex flex-col items-center justify-center gap-2">
              <HotelIcon className="h-8 w-8" />
              <div className="text-center font-medium">Hotel</div>
            </div>
          </Card>
          <Card className="p-4 hover:bg-muted/50 cursor-pointer">
            <div className="flex flex-col items-center justify-center gap-2">
              <ActivityIcon className="h-8 w-8" />
              <div className="text-center font-medium">Event</div>
            </div>
          </Card>
        </div>
      </div>
      <div className="space-y-4 bottom-1 border p-6  rounded-sm backdrop-blur-lg">
        <h2 className="text-3xl font-bold">Customize your business</h2>
        <p className="text-muted-foreground">Fill out the details for your business.</p>
        <form className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Business Name</Label>
            <Input id="name" type="text" placeholder="Enter business name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="banner">Banner Image</Label>
            <Input id="banner" type="file" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="details">Business Details</Label>
            <Textarea id="details" placeholder="Enter business details" className="min-h-[120px]" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact">Contact Information</Label>
            <Input id="contact" type="text" placeholder="Enter contact information" />
          </div>
          <Button type="submit" className="w-full">
            Create Business
          </Button>
        </form>
      </div>
    </div>
  )
}

function ActivityIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function DogIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>
  )
}


function HotelIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 22v-6.57" />
      <path d="M12 11h.01" />
      <path d="M12 7h.01" />
      <path d="M14 15.43V22" />
      <path d="M15 16a5 5 0 0 0-6 0" />
      <path d="M16 11h.01" />
      <path d="M16 7h.01" />
      <path d="M8 11h.01" />
      <path d="M8 7h.01" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </svg>
  )
}


function LibraryIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  )
}


function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function StoreIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}
