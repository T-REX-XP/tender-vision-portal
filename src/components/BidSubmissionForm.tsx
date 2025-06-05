
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2, Upload, X, FileText, File, FileImage, FileArchive, FileVideo, FileAudio, Info } from "lucide-react";
import { useState } from "react";

interface BidSubmissionFormProps {
  tender: {
    requirements: { id: string; question: string; type: 'text' | 'dropdown'; options?: string[]; mandatory?: boolean }[];
  };
  bidData?: {
    id: string;
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

  console.log('=== BID SUBMISSION FORM DEBUG ===');
  console.log('bidData prop:', bidData);
  console.log('isEditable:', isEditable);
  console.log('bidData is truthy:', !!bidData);

  // Return early if bidData is not available
  if (!bidData) {
    console.log('🔄 Rendering loading state - bidData is falsy');
    return (
      <Card>
        <CardHeader>
          <CardTitle>Bid Submission Form</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-500">Loading bid data...</p>
        </CardContent>
      </Card>
    );
  }

  console.log('✅ Rendering full form - bidData is available');
  console.log('=== END BID SUBMISSION FORM DEBUG ===');

  const addLineItem = () => {
    const newItem = {
      id: Date.now().toString(),
      name: '',
      quantity: 1,
      unitPrice: 0
    };
    onUpdate({
      lineItems: [...(bidData.lineItems || []), newItem]
    });
  };

  const updateLineItem = (id: string, field: string, value: string | number) => {
    const updatedItems = (bidData.lineItems || []).map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onUpdate({ lineItems: updatedItems });
  };

  const removeLineItem = (id: string) => {
    const updatedItems = (bidData.lineItems || []).filter(item => item.id !== id);
    onUpdate({ lineItems: updatedItems });
  };

  const calculateTotal = (quantity: number, unitPrice: number) => {
    return (quantity * unitPrice).toFixed(2);
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files && isEditable) {
      const newFiles = Array.from(files);
      onUpdate({
        attachments: [...(bidData.attachments || []), ...newFiles]
      });
    }
  };

  const removeAttachment = (index: number) => {
    const updatedAttachments = (bidData.attachments || []).filter((_, i) => i !== index);
    onUpdate({ attachments: updatedAttachments });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    
    switch (extension) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-600" />;
      case 'doc':
      case 'docx':
        return <FileText className="h-5 w-5 text-blue-600" />;
      case 'xls':
      case 'xlsx':
        return <FileText className="h-5 w-5 text-green-600" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'svg':
        return <FileImage className="h-5 w-5 text-purple-600" />;
      case 'mp4':
      case 'avi':
      case 'mov':
      case 'wmv':
        return <FileVideo className="h-5 w-5 text-pink-600" />;
      case 'mp3':
      case 'wav':
      case 'ogg':
        return <FileAudio className="h-5 w-5 text-orange-600" />;
      case 'zip':
      case 'rar':
      case '7z':
        return <FileArchive className="h-5 w-5 text-yellow-600" />;
      default:
        return <File className="h-5 w-5 text-gray-600" />;
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const parseQuestion = (question: string) => {
    const parts = question.split(' - ');
    return {
      title: parts[0],
      description: parts.slice(1).join(' - ')
    };
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
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-xl mb-6 text-gray-900">Requirements Questionnaire</h3>
          <div className="space-y-6">
            {tender.requirements.map((req) => {
              const { title, description } = parseQuestion(req.question);
              return (
                <div key={req.id} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-3">
                    <Label htmlFor={`req-${req.id}`} className="text-base font-medium text-gray-900 flex items-start gap-2">
                      {title}
                      {req.mandatory && (
                        <span className="text-red-500 text-sm">*</span>
                      )}
                    </Label>
                    {description && (
                      <p className="text-sm text-gray-600 mt-1">{description}</p>
                    )}
                  </div>
                  {req.type === 'text' ? (
                    <Textarea
                      id={`req-${req.id}`}
                      value={(bidData.questionnaire || {})[req.id] || ''}
                      onChange={(e) => onUpdate({
                        questionnaire: { ...(bidData.questionnaire || {}), [req.id]: e.target.value }
                      })}
                      disabled={!isEditable}
                      placeholder="Please provide your detailed response..."
                      className="mt-3 min-h-[100px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <Select
                      value={(bidData.questionnaire || {})[req.id] || ''}
                      onValueChange={(value) => onUpdate({
                        questionnaire: { ...(bidData.questionnaire || {}), [req.id]: value }
                      })}
                      disabled={!isEditable}
                    >
                      <SelectTrigger className="mt-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                        {req.options?.map((option) => (
                          <SelectItem key={option} value={option} className="hover:bg-blue-50">
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              );
            })}
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
              {(bidData.lineItems || []).map((item) => (
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
                       {calculateTotal(item.quantity, item.unitPrice)} NOK
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
              {(bidData.lineItems || []).length === 0 && (
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

          {(bidData.attachments || []).length > 0 && (
            <div className="mt-3 space-y-3">
              {(bidData.attachments || []).map((file, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0">
                    {getFileIcon(file.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </div>
                  </div>
                  {isEditable && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeAttachment(index)}
                      className="flex-shrink-0 text-gray-400 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}

          {(bidData.attachments || []).length === 0 && !isEditable && (
            <p className="text-gray-500 text-center py-4">No attachments provided</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
