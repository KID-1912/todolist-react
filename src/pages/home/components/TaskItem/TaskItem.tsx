import styles from "./task-item.module.scss";
import { formatScheduledDate, calcScheduledColor } from "@/utils/index.ts";

type Props = {
  task: Task;
  onEditTask: () => void;
  onDeleteTask: () => void;
  onCheckTask: () => void;
};

export default function TaskItem({ task, onEditTask, onDeleteTask, onCheckTask }: Props) {
  return (
    <div className={styles["task-item"]}>
      <div className={styles["task-checkbox"]} onClick={onCheckTask}>
        <AntdCheckOutlined className={styles["icon-checked"]} />
      </div>
      <div className="flex-1 ml-12px">
        <div className="flex justify-between items-center h-16px">
          <div className="task-name">{task.name}</div>
          <div className="flex">
            <div className={styles["action-item"]} onClick={onEditTask}>
              <AntdEditOutlined />
            </div>
            <div className={styles["action-item"]} onClick={onDeleteTask}>
              <AntdDeleteOutlined />
            </div>
          </div>
        </div>
        {task.description && <div className="text-12px text-[#666] mt-8px">{task.description}</div>}
        {task.scheduledAt && (
          <div
            className="flex items-center mt-8px text-12px"
            style={{ color: calcScheduledColor(task.scheduledAt) }}
          >
            <AntdCalendarOutlined className="mr-4px" />
            {formatScheduledDate(task.scheduledAt)}
          </div>
        )}
      </div>
    </div>
  );
}
