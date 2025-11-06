export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto pt-20 text-white px-4 min-h-screen">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Community Projects
          </h1>
          <p className="text-xl text-gray-300">
            Explore and showcase keyboard building projects
          </p>
        </div>
        <button className="px-6 py-3 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-colors border border-cyan-500/30">
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-colors">
          <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
            <div className="text-6xl">⌨️</div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">In Progress</span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Open Source</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-white">Custom 65% Layout</h2>
            <p className="text-gray-400 text-sm mb-4">
              A compact keyboard with custom keycap profile and RGB underglow. Features hot-swappable switches.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                <span className="text-sm text-gray-300">@builder123</span>
              </div>
              <span className="text-sm text-gray-400">12 contributors</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-purple-500/30 rounded-lg overflow-hidden hover:border-purple-500/50 transition-colors">
          <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
            <div className="text-6xl">🎹</div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Completed</span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Open Source</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-white">Ergonomic Split Keyboard</h2>
            <p className="text-gray-400 text-sm mb-4">
              Wireless split keyboard with tenting and thumb clusters. Fully programmable with QMK.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <span className="text-sm text-gray-300">@ergo_master</span>
              </div>
              <span className="text-sm text-gray-400">8 contributors</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-pink-500/30 rounded-lg overflow-hidden hover:border-pink-500/50 transition-colors">
          <div className="h-48 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 flex items-center justify-center">
            <div className="text-6xl">🔧</div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">In Progress</span>
              <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded text-xs">Private</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-white">Macro Pad Pro</h2>
            <p className="text-gray-400 text-sm mb-4">
              Programmable 16-key macro pad with OLED display and rotary encoders for productivity workflows.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500"></div>
                <span className="text-sm text-gray-300">@macro_builder</span>
              </div>
              <span className="text-sm text-gray-400">5 contributors</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-cyan-300">Featured Projects</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-6 p-4 bg-[#0a0a1a] rounded-lg border border-cyan-500/20">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center text-3xl">
              ⭐
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">Community Choice Award Winner</h3>
              <p className="text-sm text-gray-400">Most innovative design of 2024</p>
            </div>
            <button className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-colors">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
