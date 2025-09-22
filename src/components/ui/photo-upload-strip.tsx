import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";

interface PhotoSlot {
  id: number;
  src?: string;
  alt: string;
}

export function PhotoUploadStrip() {
  const [photos, setPhotos] = useState<PhotoSlot[]>([
    { id: 1, alt: "Photo 1" },
    { id: 2, alt: "Photo 2" },
    { id: 3, alt: "Photo 3" },
    { id: 4, alt: "Photo 4" },
  ]);

  const handleFileUpload = (id: number, file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPhotos(prev => prev.map(photo => 
        photo.id === id 
          ? { ...photo, src: reader.result as string }
          : photo
      ));
    };
    reader.readAsDataURL(file);
  };

  const handleAltChange = (id: number, alt: string) => {
    setPhotos(prev => prev.map(photo => 
      photo.id === id 
        ? { ...photo, alt }
        : photo
    ));
  };

  const removePhoto = (id: number) => {
    setPhotos(prev => prev.map(photo => 
      photo.id === id 
        ? { ...photo, src: undefined }
        : photo
    ));
  };

  return (
    <section className="py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-2 text-black">Add Photos</h3>
          <p className="text-sm text-black/70">Upload images to showcase WIC activities</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id} className="border-border/50 glass p-4">
              <div className="space-y-4">
                {/* Image Display/Upload Area */}
                <div className="relative aspect-square border-2 border-dashed border-border/40 rounded-lg overflow-hidden">
                  {photo.src ? (
                    <>
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 h-6 w-6"
                        onClick={() => removePhoto(photo.id)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </>
                  ) : (
                    <label 
                      htmlFor={`upload-${photo.id}`}
                      className="flex flex-col items-center justify-center w-full h-full cursor-pointer hover:bg-muted/20 transition-colors"
                    >
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground text-center">
                        Click to upload
                      </span>
                      <input
                        id={`upload-${photo.id}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(photo.id, file);
                        }}
                      />
                    </label>
                  )}
                </div>

                {/* Alt Text Input */}
                <div className="space-y-2">
                  <Label htmlFor={`alt-${photo.id}`} className="text-xs font-medium">
                    Alt Text
                  </Label>
                  <Input
                    id={`alt-${photo.id}`}
                    placeholder="Describe the image..."
                    value={photo.alt}
                    onChange={(e) => handleAltChange(photo.id, e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}