import '/src/styles/notFound.sass'
import '/src/styles/wrapper.sass'
import '/src/styles/reset.sass'
import '/src/styles/style.sass'
import { ButtonInfo } from '@/components/commons/ButtonComponent/buttonComponent'

export default function NotFound() {
    return (
        <div className='not-found-page wrapper'>
            <h2 className='not-found-page__title'>404</h2>
            <h2 className='not-found-page__title'>Not Found</h2>
            <p className='not-found-page__info'>Could not find requested resource</p>
            <ButtonInfo href="/" title='Return Home' className={'not-found-page__link-home'} />
        </div>
    )
}