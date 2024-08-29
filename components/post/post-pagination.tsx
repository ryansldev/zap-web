'use client'

import { Button } from "../ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious } from "../ui/pagination";
import { useRouter } from "next/navigation";

interface PostPaginationProps {
  page: number;
  notFound?: boolean;
  type?: "POST" | "COMMENT";
}

export function PostPagination({
  page,
  notFound = false,
  type = "POST"
}: PostPaginationProps) {
  const router = useRouter()

  if(notFound) {
    return (
      <>
        <span className="text-secondary-foreground">
          Nenhum {type === "POST" ? "conteúdo" : "comentário"} encontrado!
        </span>
        { page > 1 && (
          <Button onClick={() => router.back()}>
            Voltar para a página anterior
          </Button>
        )}
      </>
    )
  }
  
  return (
    <Pagination>
      <PaginationContent>
        { page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`?page=${page-1}`} />
          </PaginationItem>
        )}
        <PaginationItem className="bg-primary">
          <PaginationLink href={`?page=${page}`}>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`?page=${page+1}`}>{page+1}</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}