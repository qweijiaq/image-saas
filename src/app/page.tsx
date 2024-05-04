import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">创建应用</h1>
        <Input name="name" placeholder="应用名称"></Input>
        <Textarea name="description" placeholder="描述"></Textarea>
        <Button type="submit">提交</Button>
      </form>
    </div>
  );
}
