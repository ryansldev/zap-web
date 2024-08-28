import Link from "next/link";
import { Button } from "../ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

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
  if(notFound) {
    return (
      <>
        <span className="text-secondary-foreground">
          Nenhum {type === "POST" ? "conteúdo" : "comentário"} encontrado!
        </span>
        { page > 1 && (
          <Link href={`/timeline?page=${page-1}`}>
            <Button>
              Voltar para a página anterior
            </Button>
          </Link>
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