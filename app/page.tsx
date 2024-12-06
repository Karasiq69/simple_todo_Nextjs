import TodosView from "@/components/TodosView";
import AddTodo from "@/components/AddTodo";
import {Button} from "@/components/ui/button";
import {FolderRoot, MonitorCog, UserIcon} from "lucide-react";
import Link from "next/link";

const links = [
    {
        title: 'backend git',
        url: 'https://github.com/Karasiq69/nestapp_todo',
        icon: <FolderRoot />,
    },
    {
        title: 'frontend git',
        url: 'https://github.com/Karasiq69/simple_todo_Nextjs',
        icon: <FolderRoot />,
    },
    {
        title: 'nestjs backend api',
        url: 'https://nestjs.pmercedes.ru/todo',
        icon: <MonitorCog />,
    },
    {
        title: 'Resume (hh.ru)',
        url: 'https://hh.ru/resume/c295d910ff0da545b60039ed1f6a676f506565',
        icon: <UserIcon/>,
    },

]
export default function Home() {

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px]   justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div>
                 {links.map((link) => {
                    return (
                        <Button key={link.title} variant={'link'} className={'gap-2'} asChild>
                            <Link href={link.url} target={'_blank'}>
                                {link.icon && link.icon}
                            {link.title}
                            </Link>

                        </Button>
                    )
                })}
             </div>

            <main className="flex flex-col gap-8 row-start-2   sm:items-start bg-secondary p-20">

                <div className={'flex gap-3 w-full max-w-md'}>
                    <AddTodo/>
                </div>
                <TodosView/>
            </main>

        </div>
    );
}
