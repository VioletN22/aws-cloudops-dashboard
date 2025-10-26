export default function Dashboard() {
  const services = [
    {
      category: "Compute",
      items: [
        { name: "EC2", status: "Running", instances: 4 },
        { name: "Lambda", status: "Active", instances: 6 },
      ],
    },
    {
      category: "Storage",
      items: [
        { name: "S3", status: "Healthy", instances: 3 },
        { name: "EBS", status: "Available", instances: 7 },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "RDS", status: "Online", instances: 2 },
        { name: "DynamoDB", status: "Active", instances: 5 },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-blue-50">

      {/* Sidebar */}
      <aside className="w-16 bg-gray-800 text-white flex flex-col items-center py-6">
        {/* Toggle button */}
        <button className="mb-8 text-gray-400 hover:text-white text-2xl">
          ➤
        </button>

        {/* Placeholder icons */}
        <div className="flex flex-col gap-6">
          <div className="w-8 h-8 bg-gray-600 rounded"></div>
          <div className="w-8 h-8 bg-gray-600 rounded"></div>
          <div className="w-8 h-8 bg-gray-600 rounded"></div>
        </div>
      </aside>


      {/* Main content area */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          AWS CloudOps Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((section) => (
            <div
              key={section.category}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-4 text-blue-700">
                {section.category}
              </h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-2">Service</th>
                    <th className="py-2">Status</th>
                    <th className="py-2 text-right">Instances</th>
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((item) => (
                    <tr key={item.name} className="border-b last:border-none">
                      <td className="py-2 font-medium text-gray-700">
                        {item.name}
                      </td>
                      <td
                        className={`py-2 ${
                          item.status === "Running" || item.status === "Active"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {item.status}
                      </td>
                      <td className="py-2 text-right text-gray-600">
                        {item.instances}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
