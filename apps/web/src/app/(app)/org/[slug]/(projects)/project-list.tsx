import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { ArrowRight } from 'lucide-react'

import { getCurrentOrg } from '@/auth/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getProjects } from '@/http/get-projects'

dayjs.extend(relativeTime)

export default async function ProjectList() {
  const currentOrg = await getCurrentOrg()
  const { projects } = await getProjects(currentOrg!)

  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map(({ id, name, description, owner, createdAt }) => {
        return (
          <Card key={id} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-xl font-medium">{name}</CardTitle>
              <CardDescription className="line-clamp-2 leading-relaxed">
                {description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="itens flex gap-1.5">
              <Avatar className="size-4">
                {owner.avatarUrl && <AvatarImage src={owner.avatarUrl} />}
                <AvatarFallback />
              </Avatar>

              <span className="truncate text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  {owner.name}
                </span>
                {dayjs(createdAt).fromNow()}
              </span>

              <Button size="xs" variant="outline" className="ml-auto">
                View <ArrowRight className="ml-2 size-3" />
              </Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
