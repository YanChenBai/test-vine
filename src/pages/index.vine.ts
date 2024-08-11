import Hello from '@/components/hello.vine'
export default function IndexPage() {
  return vine`
  <div class="size-screen flex items-center justify-center">
    <div class="flex flex-col items-center gap-20px md:flex-row">
      <Hello>
    </div>
  </div>
  `
}

