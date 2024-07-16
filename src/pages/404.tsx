import Head from 'next/head'
import NotFoundPage from '@/components/commons/NotFound/NotFound'

export default function NotFound() {
    return (
        <>
            <Head>
                <title>YourTour</title>
                <meta name="description" content="Идеальные путешествия существуют" />
                <meta name="keywords" content="путешествия, туры, туризм, отдых" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg" ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"></link>
            </Head >
            <NotFoundPage />
        </>
    )
}