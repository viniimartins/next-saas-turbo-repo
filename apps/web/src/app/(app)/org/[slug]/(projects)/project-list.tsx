import { ArrowRight } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default async function ProjectList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Projeto 01</CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            magnam, incidunt consectetur, esse beatae neque consequuntur natus
            voluptates voluptatibus repudiandae unde porro illo? Alias
            voluptatem itaque quasi! Ullam, possimus blanditiis.
          </CardDescription>
        </CardHeader>
        <CardFooter className="itens flex gap-1.5">
          <Avatar className="size-4">
            <AvatarImage src="https://github.com/diego3g.png" />
            <AvatarFallback />
          </Avatar>

          <span className="text-xs text-muted-foreground">
            Created by{' '}
            <span className="font-medium text-foreground">Diego Fernandes</span>{' '}
            a day ago
          </span>

          <Button size="xs" variant="outline" className="ml-auto">
            View <ArrowRight className="ml-2 size-3" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
