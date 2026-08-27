"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Map, Search, Image as ImageIcon } from "lucide-react";
import { fetchApi } from "../../../../lib/api/client";
import { DataTable } from "../../components/DataTable";
import { ColumnDef } from "@tanstack/react-table";

type State = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string; // URL based
  status: string;
  featured: boolean;
  code?: string;
};

export default function AdminStates() {
  const [states, setStates] = useState<State[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  
  const defaultFormData = {
    name: "",
    slug: "",
    code: "", // Required by State Schema
    description: "",
    image: "", // We'll just ask for a URL
    status: "PUBLISHED",
    featured: false
  };
  
  const [formData, setFormData] = useState(defaultFormData);

  const loadStates = async () => {
    try {
      const data = await fetchApi('/states');
      setStates(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load states");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStates();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editId) {
        await fetchApi(`/states/${editId}`, {
          method: "PUT",
          body: JSON.stringify(formData)
        });
      } else {
        await fetchApi('/states', {
          method: "POST",
          body: JSON.stringify(formData)
        });
      }
      setShowForm(false);
      setEditId(null);
      setFormData(defaultFormData);
      loadStates();
    } catch (err) {
      console.error(err);
      alert("Failed to save state.");
    }
  };

  const handleEdit = (state: State) => {
    setFormData({
      name: state.name,
      slug: state.slug,
      code: state.code || "",
      description: state.description || "",
      image: state.image || "",
      status: state.status || "PUBLISHED",
      featured: state.featured || false
    });
    setEditId(state._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this state?")) return;
    try {
      await fetchApi(`/states/${id}`, { method: "DELETE" });
      loadStates();
    } catch (err) {
      console.error(err);
      alert("Failed to delete state");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage States</h1>
          <p className="text-gray-500 mt-1">Add or edit states and their image URLs.</p>
        </div>
        <button 
          onClick={() => {
            if (showForm) {
              setShowForm(false);
            } else {
              setEditId(null);
              setFormData(defaultFormData);
              setShowForm(true);
            }
          }}
          className="flex items-center gap-2 bg-[#0d1b3e] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#c9a84c] hover:text-[#0d1b3e] transition-colors"
        >
          <Plus size={18} />
          {showForm ? "Cancel" : "Add State"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">{editId ? "Edit State" : "Add New State"}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value, slug: e.target.value.toLowerCase().replace(/ /g, '-')})}
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#c9a84c]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State Code</label>
                <input 
                  type="text" 
                  value={formData.code}
                  onChange={(e) => setFormData({...formData, code: e.target.value.toUpperCase()})}
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#c9a84c]"
                  placeholder="e.g. DL, MH, UP"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                <input 
                  type="text" 
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#c9a84c]"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (For local use /assets/images/name.jpg or http://...)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <ImageIcon size={18} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#c9a84c]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#c9a84c]"
                rows={3}
              />
            </div>
            
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <input 
                type="checkbox" 
                id="isFeaturedState"
                checked={formData.featured}
                onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                className="w-5 h-5 text-[#c9a84c] rounded focus:ring-[#c9a84c]"
              />
              <label htmlFor="isFeaturedState" className="text-sm font-bold text-gray-900 cursor-pointer select-none">
                Mark as Featured State
                <span className="block text-xs font-normal text-gray-500 mt-0.5">This state will be used as a top-level heading in the Featured Courts section.</span>
              </label>
            </div>

            <button type="submit" className="bg-[#c9a84c] text-[#0d1b3e] font-bold px-6 py-2.5 rounded-lg hover:bg-[#d4a93a] transition-colors">
              Save State
            </button>
          </form>
        </div>
      )}

      {/* States List */}
      {loading ? (
        <div className="text-center py-10">Loading states...</div>
      ) : states.length === 0 ? (
        <div className="bg-white p-8 text-center rounded-xl border border-gray-100 text-gray-500">
          No states found. Add one above.
        </div>
      ) : (
        <DataTable 
          data={states} 
          searchPlaceholder="Search states by name or slug..."
          filters={[
            {
              id: "status",
              placeholder: "All Statuses",
              options: [
                { label: "Published", value: "PUBLISHED" },
                { label: "Draft", value: "DRAFT" }
              ]
            },
            {
              id: "featured",
              placeholder: "Featured Status",
              options: [
                { label: "Featured (Yes)", value: "true" },
                { label: "Normal (No)", value: "false" }
              ]
            }
          ]}
          columns={[
            {
              id: "image",
              header: "Image",
              cell: ({ row }) => (
                row.original.image ? (
                  <img src={row.original.image} alt={row.original.name} className="w-12 h-12 rounded object-cover border border-gray-200" />
                ) : (
                  <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center border border-gray-200 text-gray-400">
                    <Map size={20} />
                  </div>
                )
              )
            },
            {
              accessorKey: "name",
              header: "Name",
              cell: ({ row }) => <span className="font-medium text-gray-900">{row.original.name}</span>
            },
            {
              accessorKey: "slug",
              header: "Slug",
              cell: ({ row }) => <span className="text-gray-500">{row.original.slug}</span>
            },
            {
              accessorKey: "status",
              header: "Status",
              filterFn: 'equalsString',
              cell: ({ getValue }) => (
                getValue() === "PUBLISHED" ? (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Published</span>
                ) : (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">Draft</span>
                )
              )
            },
            {
              id: "featured",
              header: "Featured",
              accessorFn: (row) => row.featured ? "true" : "false",
              filterFn: 'equalsString',
              cell: ({ row }) => (
                row.original.featured ? (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                    ⭐ Yes
                  </span>
                ) : (
                  <span className="text-gray-400 text-sm">No</span>
                )
              )
            },
            {
              id: "actions",
              header: "Actions",
              cell: ({ row }) => (
                <div className="flex items-center gap-3">
                  <button onClick={() => handleEdit(row.original)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDelete(row.original._id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              )
            }
          ]} 
        />
      )}
    </div>
  );
}
