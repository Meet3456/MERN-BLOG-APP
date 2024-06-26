import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>PROJECTS</h1>
      <p className='text-lg text-gray-200'>Build fun and engaging projects while learning HTML, CSS, and JavaScript!</p>
      <CallToAction />
    </div>
  )
}