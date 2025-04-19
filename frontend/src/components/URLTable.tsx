
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface URLData {
  id: string;
  originalUrl: string;
  shortUrl: string;
  createdAt: string;
  hits: number;
}

const PLACEHOLDER_DATA: URLData[] = [
  {
    id: "1",
    originalUrl: "https://www.example.com/very/long/url/that/needs/shortening",
    shortUrl: "http://short.url/abc123",
    createdAt: "2024-04-19",
    hits: 145
  },
  {
    id: "2",
    originalUrl: "https://www.example.com/another/long/url/example",
    shortUrl: "http://short.url/def456",
    createdAt: "2024-04-18",
    hits: 89
  },
  // Add more placeholder data as needed
];

export function URLTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data] = useState<URLData[]>(PLACEHOLDER_DATA);

  const filteredData = data.filter(item =>
    item.originalUrl.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.shortUrl.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search URLs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      
      <div className="border rounded-lg bg-white/50 backdrop-blur-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Original URL</TableHead>
              <TableHead>Short URL</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead>Hits</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((url) => (
              <TableRow key={url.id}>
                <TableCell className="max-w-[300px] truncate">{url.originalUrl}</TableCell>
                <TableCell>{url.shortUrl}</TableCell>
                <TableCell>{url.createdAt}</TableCell>
                <TableCell>{url.hits}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm" className="text-red-600">Delete</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
