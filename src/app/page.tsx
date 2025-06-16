import { SelectScrollable } from "@/components/select-drop"
import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                  Time Zone Scheduler & Google Meet Integration
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* <div className="bg-muted/50 mx-auto h-24 w-full max-w-3xl rounded-xl" /> */}
          <div className="bg-muted/50 mx-auto h-[100vh] w-full max-w-5xl rounded-xl p-5 flex justify-around">
          <div className="bg-black grow p-5 flex">
          <div className="bg-white">
            <h1>Select First Country</h1>
          <SelectScrollable/>
          </div>
          </div>
          <div className="bg-white grow p-5 flex">
          <div className="bg-white">
          <h1>Select Second Country</h1>
          <SelectScrollable/>
          </div>
          </div>
          </div>
        </div>
      </SidebarInset> 
        <SidebarRight /> 
    </SidebarProvider>
  )
}
