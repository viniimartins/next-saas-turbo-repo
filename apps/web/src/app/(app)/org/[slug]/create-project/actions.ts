'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

// import { createProject } from '@/http/create-Project'

const projectSchema = z.object({
  name: z
    .string()
    .min(4, { message: 'Please, incluide at least 4 characters.' }),
  description: z.string(),
})

export async function createProjectAction(data: FormData) {
  const result = projectSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { name, domain } = result.data

  try {
    // await createProject({
    //   name,
    //   domain,
    //   shouldAttachUsersByDomain,
    // })
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json()

      return { success: false, message, errors: null }
    }

    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes.',
      errors: null,
    }
  }

  return {
    success: true,
    message: 'Successfully saved the project.',
    errors: null,
  }
}
