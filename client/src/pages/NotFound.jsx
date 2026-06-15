import Button from "../components/common/Button";
import Container from "../components/common/Container";
import PageTransition from "../components/common/PageTransition";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found", "The requested page could not be found.");

  return (
    <PageTransition>
      <Container className="grid min-h-[65vh] place-items-center py-20 text-center">
        <div>
          <p className="text-8xl font-black tracking-[-0.08em] text-blue">404</p>
          <h1 className="mt-5 text-3xl font-black text-ink">This page took a different route.</h1>
          <p className="mx-auto mt-4 max-w-md text-slate-600">
            The link may be outdated, or the page may have moved.
          </p>
          <Button to="/" className="mt-8">
            Back to home
          </Button>
        </div>
      </Container>
    </PageTransition>
  );
}
