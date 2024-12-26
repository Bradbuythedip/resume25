import Header from './components/Header'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <Header />
      <hr className="my-6 border-t-2 border-gray-300" />
      <Summary />
      <Experience />
      <Education />
      <Skills />
    </main>
  )
}