const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.INTEGER,
        },
        boardId: {
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(255),
        },
        reviewAvg: {
          type: Sequelize.FLOAT,
        },
      },
      {
        sequelize,
        // tableName: 'tableName', // table명을 수동으로 생성 함
        // freezeTableName: true, // true: table명의 복수형 변환을 막음
        underscored: true, // true: underscored, false: camelCase
        timestamps: true, // createAt, updatedAt
        paranoid: true, // deletedAt
      }
    );
  }

  static associate(db) {
    db.Post.belongsTo(db.User, {
      foreignKey: { name: "userId", onDelete: "SET NULL", as: "User" },
    });
    db.Post.belongsTo(db.Board, {
      foreignKey: { name: "boardId", onDelete: "SET NULL", as: "Board" },
    });
    db.Post.hasMany(db.Review, {
      foreignKey: { name: "userId", onDelete: "SET NULL", as: "Review" },
    });
  }
};
