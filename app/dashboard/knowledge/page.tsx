"use client";

import { useEffect, useState } from "react";

import {
  getKnowledgeBase,
  createKnowledge,
  deleteKnowledge,
} from "@/services/knowledge.service";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Knowledge = {
  id: string;
  title: string;
  content: string;
  category: string | null;
};

export default function KnowledgePage() {
  const [items, setItems] = useState<Knowledge[]>([]);

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [category, setCategory] =
    useState("");

  useEffect(() => {
    loadKnowledge();
  }, []);

  const loadKnowledge = async () => {
    try {
      const data =
        await getKnowledgeBase();

      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate =
    async () => {
      try {
        await createKnowledge({
          title,
          content,
          category,
        });

        setTitle("");
        setContent("");
        setCategory("");

        setOpen(false);

        await loadKnowledge();
      } catch (error) {
        console.error(error);
      }
    };

  const handleDelete =
    async (id: string) => {
      const confirmed =
        window.confirm(
          "Delete this article?"
        );

      if (!confirmed) return;

      try {
        await deleteKnowledge(id);

        await loadKnowledge();
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle>
          Knowledge Base
        </CardTitle>

        <Dialog
          open={open}
          onOpenChange={setOpen}
        >
          <DialogTrigger asChild>
            <Button>
              Add Article
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Create Article
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">

              <Input
                placeholder="Title"
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
              />

              <Input
                placeholder="Category"
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
              />

              <Textarea
                rows={6}
                placeholder="Content"
                value={content}
                onChange={(e) =>
                  setContent(
                    e.target.value
                  )
                }
              />

              <Button
                className="w-full"
                onClick={
                  handleCreate
                }
              >
                Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>

      <CardContent>
        <Table>

          <TableHeader>
            <TableRow>
              <TableHead>
                Title
              </TableHead>

              <TableHead>
                Category
              </TableHead>

              <TableHead>
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>

            {items.map((item) => (
              <TableRow
                key={item.id}
              >
                <TableCell>
                  {item.title}
                </TableCell>

                <TableCell>
                  {item.category ??
                    "-"}
                </TableCell>

                <TableCell>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() =>
                      handleDelete(
                        item.id
                      )
                    }
                  >
                    Delete
                  </Button>

                </TableCell>
              </TableRow>
            ))}

          </TableBody>

        </Table>
      </CardContent>
    </Card>
  );
}