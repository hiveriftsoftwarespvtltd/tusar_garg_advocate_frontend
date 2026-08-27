"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { fetchApi } from "../../../../lib/api/client";
import CourtForm from "./CourtForm";
import { DataTable } from "../../components/DataTable";
import { ColumnDef } from "@tanstack/react-table";

export default function AdminCourts() {
  const [courts, setCourts] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCourt, setEditingCourt] = useState<any>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [courtsData, statesData] = await Promise.all([
        fetchApi('/courts'),
        fetchApi('/states')
      ]);
      setCourts(courtsData);
      setStates(statesData);
    } catch (err) {
      console.error(err);
      alert("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEdit = (court: any) => {
    setEditingCourt(court);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingCourt(null);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this court?")) return;
    try {
      await fetchApi(`/courts/${id}`, { method: "DELETE" });
      loadData();
    } catch (err) {
      console.error(err);
      alert("Failed to delete court");
    }
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0d1b3e]">Manage Courts</h1>
        <button onClick={handleCreate} className="bg-[#c9a84c] text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-[#b09342] transition-colors">
          <Plus size={18} />
          Add Court
        </button>
      </div>

      {showForm && (
        <CourtForm 
          initialData={editingCourt} 
          states={states} 
          onClose={() => setShowForm(false)} 
          onSuccess={() => {
            setShowForm(false);
            loadData();
          }} 
        />
      )}

      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : courts.length === 0 ? (
        <div className="bg-white p-8 text-center rounded-xl border border-gray-100 text-gray-500">
          No courts found. Click "Add Court" to create one.
        </div>
      ) : (
        <DataTable 
          data={courts} 
          searchPlaceholder="Search courts by name or type..."
          filters={[
            {
              id: "state",
              placeholder: "All States",
              options: states.map(s => ({ label: s.name, value: s.name }))
            },
            {
              id: "courtType",
              placeholder: "All Court Types",
              options: [
                { label: "Supreme Court", value: "Supreme Court" },
                { label: "High Court", value: "High Court" },
                { label: "District Court", value: "District Court" },
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
              accessorKey: "name",
              header: "Name",
              cell: ({ row }) => <span className="font-medium text-[#0d1b3e]">{row.original.name}</span>
            },
            {
              id: "state",
              header: "State",
              accessorFn: (row) => row.state?.name || row.stateId?.name || states.find(s => s._id === (typeof row.stateId === 'object' ? row.stateId._id : row.stateId))?.name || "Unknown",
              filterFn: 'equalsString',
              cell: ({ getValue }) => <span className="text-sm text-gray-600">{getValue() as string}</span>
            },
            {
              accessorKey: "courtType",
              header: "Type",
              filterFn: 'equalsString',
              cell: ({ getValue }) => <span className="text-sm text-gray-600">{getValue() as string}</span>
            },
            {
              accessorKey: "status",
              header: "Status",
              cell: ({ getValue }) => (
                getValue() === "PUBLISHED" ? (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Published</span>
                ) : (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Draft</span>
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
                <div className="flex items-center gap-2">
                  <button onClick={() => handleEdit(row.original)} className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                    <Edit2 size={16} />
                  </button>
                  <button onClick={() => handleDelete(row.original._id)} className="p-2 text-red-500 hover:bg-red-50 rounded">
                    <Trash2 size={16} />
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
