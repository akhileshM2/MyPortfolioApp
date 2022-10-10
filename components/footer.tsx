const Footer = () => {
  return (
    <footer className="bg-slate-800 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/network.png"
            alt="Social Network"
            className="w-8"
          />
          <div className="uppercase font-bold text-white text-lg tracking-wider">Come hangout with me on...</div>
        </div>
        <div className="text-white text-sm">
          
          <a href="https://twitter.com/AkhMishra" className="hover:text-blue-400">
          <div className="flex items-center space-x-2">
          <img
            src="/twitter.png"
            alt="Twitter"
            className="w-4"
          />
          <div className="font-bold text-sm tracking-wider">Twitter</div>
        </div>
          </a>
          <div></div>
          <a href="https://www.instagram.com/akhilesh.mishra_/" className="hover:text-blue-400">
          <div className="flex items-center space-x-2">
          <img
            src="/instagram.png"
            alt="Instagram"
            className="w-4"
          />
          <div className="font-bold text-sm tracking-wider">Instagram</div>
        </div>
        </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
