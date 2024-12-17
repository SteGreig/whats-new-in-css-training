
export default {
  boxClasses: "content-start",
  content: (
    <>
      <h2 className="slide-heading mb-8">Normal divs with display: block</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-blue-50 text-slate-600 rounded-2xl p-8 content-start h-64">
          <p>align-content: start;</p>
        </div>
        <div className="flex-1 bg-blue-50 text-slate-600 rounded-2xl p-8 content-center h-64">
          <p>align-content: center;</p>
        </div>
        <div className="flex-1 bg-blue-50 text-slate-600 rounded-2xl p-8 content-end h-64">
          <p>align-content: end;</p>
        </div>
      </div>
    </>
  ),
};