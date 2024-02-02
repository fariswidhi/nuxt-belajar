// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'

export default NuxtAuthHandler({
pages:{
    signIn:'/login'
},
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({

        clientId: '7677483dea67bd27ee6e',
        clientSecret:'04c04ae25518ef69df06ea9c96666a7b9741a035'
    }),
  ],
})