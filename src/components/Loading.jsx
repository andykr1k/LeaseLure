import ReactLoading from 'react-loading'

export default function Loading() {
    return (
        <div className='flex items-center justify-center'>
            <ReactLoading type={"bubbles"} color={"purple"} height={50} width={50} />
        </div>
    )
}