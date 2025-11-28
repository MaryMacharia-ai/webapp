<div className="grid grid-cols-3 gap-[28px]">
  {products.map(p => (
    <div key={p.title} className="bg-white rounded-[16px] overflow-hidden shadow-soft">
      <img src={p.img} alt={p.title} className="w-full h-[260px] object-cover" />
      <div className="p-6">
        <h3 className="text-[18px] font-semibold">{p.title}</h3>
        <p className="text-[15px] text-gray-600 mt-2">{p.desc}</p>
        <button className="mt-4 inline-block px-5 py-2 bg-primary text-white rounded-lg">Learn More</button>
      </div>
    </div>
  ))}
</div>
