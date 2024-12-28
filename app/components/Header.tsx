'use client'

export default function Header() {
  return (
    <header className="text-center">
      <h1 className="text-4xl font-bold mb-2">Bradley W. Merrill</h1>
      <div className="text-gray-600">
        <a 
          href="mailto:bwmengineer428@gmail.com"
          className="hover:text-blue-600 transition-colors"
        >
          bwmengineer428@gmail.com
        </a>{' '}
        | https://github.com/Bradbuythedip
      </div>
    </header>
  )
}
