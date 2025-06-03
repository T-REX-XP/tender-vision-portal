
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2, Upload, X } from "lucide-react";
import { useState } from "react";

interface BidSubmissionFormProps {
  tender: {
    requirements: { id: string; question: string; type: 'text' | 'dropdown'; options?: string[] }[];
  };
  bidData: {
    generalDescription: string;
    questionnaire: { [key: string]: string };
    lineItems: { id: string; name: string; quantity: number; unitPrice: number }[];
    attachments: File[];
  };
  isEditable: boolean;
  onUpdate: (data: any) => void;
}

export const BidSubmissionForm = ({ tender, bidData, isEditable, onUpdate }: BidSubmissionFormProps) => {
  const [dragActive, setDragActive] = useState(false);

  const addLineItem = () => {
    const newItem = {
      id: Date.now().toString(),
      name: '',
      quantity: 1,
      unitPrice: 0
    };
    onUpdate({
      lineItems: [...bidData.lineItems, newItem]
    });
  };

  const updateLineItem = (id: string, field: string, value: string | number) => {
    const updatedItems = bidData.lineItems.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onUpdate({ lineItems: updatedItems });
  };

  const removeLineItem = (id: string) => {
    const updatedItems = bidData.lineItems.filter(item => item.id !== id);
    onUpdate({ lineItems: updatedItems });
  };

  const calculateTotal = (quantity: number, unitPrice: number) => {
    return (quantity * unitPrice).toFixed(2);
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files && isEditable) {
      const newFiles = Array.from(files);
      onUpdate({
        attachments: [...bidData.attachments, ...newFiles]
      });
    }
  };

  const removeAttachment = (index: number) => {
    const updatedAttachments = bidData.attachments.filter((_, i) => i !== index);
    onUpdate({ attachments: updatedAttachments });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    handleFileUpload(e.dataTransfer.files);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bid Submission Form</CardTitle>
        {!isEditable && (
          <p className="text-sm text-gray-600">
            This bid is read-only (either submitted or deadline has passed)
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        {/* General Description */}
        <div>
          <Label htmlFor="description">General Bid Description</Label>
          <Textarea
            id="description"
            value={bidData.generalDescription}
            onChange={(e) => onUpdate({ generalDescription: e.target.value })}
            disabled={!isEditable}
            placeholder="Provide a general description of your bid..."
            className="mt-1"
          />
        </div>

        {/* Questionnaire */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Requirements Questionnaire</h3>
          <div className="space-y-4">
            {tender.requirements.map((req) => (
              <div key={req.id}>
                <Label htmlFor={`req-${req.id}`}>{req.question}</Label>
                {req.type === 'text' ? (
                  <Textarea
                    id={`req-${req.id}`}
                    value={bidData.questionnaire[req.id] || ''}
                    onChange={(e) => onUpdate({
                      questionnaire: { ...bidData.questionnaire, [req.id]: e.target.value }
                    })}
                    disabled={!isEditable}
                    className="mt-1"
                  />
                ) : (
                  <Select
                    value={bidData.questionnaire[req.id] || ''}
                    onValueChange={(value) => onUpdate({
                      questionnaire: { ...bidData.questionnaire, [req.id]: value }
                    })}
                    disabled={!isEditable}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {req.options?.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bid Line Items */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg">Bid Line Items</h3>
            {isEditable && (
              <Button onClick={addLineItem} size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Add Item
              </Button>
            )}
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Total</TableHead>
                {isEditable && <TableHead>Actions</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {bidData.lineItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Input
                      value={item.name}
                      onChange={(e) => updateLineItem(item.id, 'name', e.target.value)}
                      disabled={!isEditable}
                      placeholder="Item name"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateLineItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                      disabled={!isEditable}
                      min="1"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={item.unitPrice}
                      onChange={(e) => updateLineItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                      disabled={!isEditable}
                      min="0"
                      step="0.01"
                    />
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">
                      ${calculateTotal(item.quantity, item.unitPrice)}
                    </span>
                  </TableCell>
                  {isEditable && (
                    <TableCell>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeLineItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
              {bidData.lineItems.length === 0 && (
                <TableRow>
                  <TableCell colSpan={isEditable ? 5 : 4} className="text-center text-gray-500">
                    No line items added yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Attachments */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Attachments</h3>
          
          {isEditable && (
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center ${
                dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
            >
              <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-600 mb-2">
                Drag and drop files here, or click to select
              </p>
              <input
                type="file"
                multiple
                accept=".pdf,.docx,.xlsx,.xls,.doc"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
                id="file-upload"
              />
              <Button variant="outline" asChild>
                <label htmlFor="file-upload" className="cursor-pointer">
                  Select Files
                </label>
              </Button>
            </div>
          )}

          {bidData.attachments.length > 0 && (
            <div className="mt-3 space-y-2">
              {bidData.attachments.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">{file.name}</span>
                  {isEditable && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeAttachment(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
